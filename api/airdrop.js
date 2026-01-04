const { Connection, PublicKey, Keypair, clusterApiUrl } = require('@solana/web3.js');
const { getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { walletAddress } = req.body;

        if (!walletAddress) {
            return res.status(400).json({ error: 'Wallet address is required' });
        }

        const MINT_AUTHORITY_PRIVATE_KEY = process.env.MINT_AUTHORITY_PRIVATE_KEY;
        const LUBEC_MINT_ADDRESS = process.env.LUBEC_MINT_ADDRESS;

        if (!MINT_AUTHORITY_PRIVATE_KEY || !LUBEC_MINT_ADDRESS) {
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const secretKey = Uint8Array.from(JSON.parse(MINT_AUTHORITY_PRIVATE_KEY));
        const mintAuthority = Keypair.fromSecretKey(secretKey);

        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

        const mintPublicKey = new PublicKey(LUBEC_MINT_ADDRESS);
        const recipientPublicKey = new PublicKey(walletAddress);

        console.log('Creating/getting token account for:', walletAddress);

        const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            mintAuthority,
            mintPublicKey,
            recipientPublicKey
        );

        console.log('Token account:', recipientTokenAccount.address.toString());

        const amount = 100 * Math.pow(10, 9);

        console.log('Minting tokens...');

        const signature = await mintTo(
            connection,
            mintAuthority,
            mintPublicKey,
            recipientTokenAccount.address,
            mintAuthority,
            amount
        );

        console.log('Success! Signature:', signature);

        return res.status(200).json({
            success: true,
            signature: signature,
            amount: 100,
            recipient: walletAddress
        });

    } catch (error) {
        console.error('Airdrop error:', error);
        return res.status(500).json({
            error: error.message || 'Failed to process airdrop'
        });
    }
};
