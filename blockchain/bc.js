const SHA256 = require('crypto-js').SHA256;

class Transaction{
    constructor(from,to,amount)
    {
        this.from=from;
        this.to=to;
        this.amount=amount;
        this.tid=SHA256(from+to+amount).toString();
    }
}
class Block{
    constructor(timestamp,transactions,previousHash,miner)
    {
        this.timestamp=timestamp;
        this.transactions=transactions;
        this.previousHash=previousHash;
        this.nonce=0;
        this.currentHash=this.calculateHash();        
        this.minedBy = miner;
    }
    calculateHash(){

        return SHA256(this.timestamp+JSON.stringify(this.transactions)+this.previousHash + this.nonce ).toString();
    }
   mineNewBlock(difficulty)
   {
       while(this.currentHash.substr(0,difficulty) !== "0".repeat(difficulty))
       {
           this.nonce++;
           this.currentHash=this.calculateHash();
       }
       console.log("A new block has been mined....");
   }
}

class Blockchain{
    constructor()
    {   
        this.systemaddress = SHA256(0).toString();
        this.miningreward = 500;
        this.difficulty = 1; 
        this.chain= [this.getgenesisblock()];        
    }
    getgenesisblock()
    {    
         return new Block(Date.now(),"This is genesis block",SHA256("0").toString());
         
    }
    getlatestBlock()
    {
        return this.chain[this.chain.length - 1];
    }
  getBalanceOfAddress(address)
  {
      
     let balance = 0;
      for(const block of this.chain)
      {
          for(const trans of block.transactions)
          {
              if(trans.from == address)
              balance -= +trans.amount;
              else if(trans.to == address)
              balance += +trans.amount;

          }
      } 
      return balance;
  }
    checkchainvalidation(){
        for(let i=1;i<this.chain.length;i++)
        {
           
            if(this.chain[i].previousHash !== this.chain[i-1].calculateHash())
            return false;
            
            
        }
        return true;
    }
}
zcoin = new Blockchain();

  
//   x=3;
//   var to = SHA256(x.toString()).toString();  
//   console.log(to);

 exports = module.exports = {Transaction,Block,Blockchain,zcoin};
