# Berlin-blockchain
lets try create a Blockchain for Berlin with nodejs and angular.
need collaborations, feel free to create a pull request.

for now available APIS:
1. /blocks (GET)
2. /mine (POST)
3. /transactions (GET)
4. /transact (POST)
5. /public-key (GET)


frontend will be created with Angular.

### npm run dev
- to start the application npm i, after done run `npm run dev`
- to run test `npm run test`
the application will run in localhost:3001

### to testing P2P with socket 
open terminal first window and run
- npm run dev this will run in port 3001
second window run:
- HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev (to run in port 3002)

### testing with Postman
1. to create a transaction <POST>localhost:<3001 or 3002>/transact
    - example params:
        `{
            "recipient": "3002-4ddr355",
            "amount": 30
        }`

2. to fetch all blocks transaction <GET> http://localhost:<3001 or 3002>/transactions
3. to get publicKey <GET> http://localhost:<3001 or 3002>/public-key





