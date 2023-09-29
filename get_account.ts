import {

    Connection,
  
    PublicKey,
  
    clusterApiUrl,
  
    Keypair,
  
    LAMPORTS_PER_SOL,
  
  } from "@solana/web3.js";
  
  async function getBalance() {

    try {

        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

        const balance = await connection.getBalance(

            new PublicKey("HugF2ec5mp7HuEZCoAhSZP3jjYrCfNJcJTc91nURV76r")

        );



        console.log(balance);

    } catch (err: any) { }

}
  
  const main = async () => {
  
    await getBalance();
  
  };
  
   
  
  main();