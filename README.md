# Berlin-blockchain
lets try create a Blockchain for Berlin with nodejs and angular.
need collaborations, feel free to create a merge request.

for now available APIS:
1. /blocks (GET)
2. /mine (POST)
3. /transactions (GET)
4. /transact (POST)
5. /public-key (GET)


frontend will be created with Angular.

###
to start the application npm i, after done npm run dev
to run test npm run test
the application will run in localhost:3001

###
to testing all blocks
- npm run dev this will run in port 3001
- HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev (to run in port 3002)

### testing with Postman
1. localhost:<3001 or 3002>/transact (<POST> to create transaction)
    example params:
    {
        "recipient": "3002-4ddr355",
        "amount": 30
    }

2. http://localhost:<3001 or 3002>/transactions (<GET> to fetch all blocks)
3. http://localhost:<3001 or 3002>/public-key (<GET> to see the / get publicKey)





