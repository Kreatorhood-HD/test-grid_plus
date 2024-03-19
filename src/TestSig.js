import {signTypedData} from '@wagmi/core'
import {config} from "./wagmiConfig";

const TestSig = () => {


    const checkSigCorrectMessage = async () => {
        try {
            const sig = await signTypedData(config,{
                types: {
                    "BatchSellData": [{"name": "tree", "type": "SellData[2]"}],
                    "SellData": [{"name": "seller", "type": "address"}, {
                        "name": "nftAddress",
                        "type": "address"
                    }, {"name": "tokenId", "type": "uint256"}, {
                        "name": "sellNonce",
                        "type": "uint256"
                    }, {"name": "expirationDate", "type": "uint256"}, {
                        "name": "paymentAmount",
                        "type": "uint256"
                    }, {"name": "paymentTokenAddress", "type": "address"}]
                },
                primaryType: 'BatchSellData',
                domain: {
                    "name": "KreatorhoodMarketplace",
                    "version": "1",
                    "chainId": 11155111,
                    "verifyingContract": "0x548aBD5A10a6f0ee52f7E6f0DB6334df2528d96A"
                },
                message: {
                    "tree": [{
                        "seller": "0x4b954980694a8c19fd4c6341995c8b9aebbcf64a",
                        "expirationDate": 1713431236,
                        "nftAddress": "0x17dbFE52A53b3EAe5f583C754C85872DB686D5f6",
                        "sellNonce": "99662902435221647238076205349072634254786178358234807748365031350089632155500",
                        "tokenId": 441,
                        "paymentAmount": "22000000000000000",
                        "paymentTokenAddress": "0x76ad147d23489541ab3BE66DAC9cBEe30773059a"
                    }, {
                        "seller": "0x4b954980694a8c19fd4c6341995c8b9aebbcf64a",
                        "expirationDate": 1713431236,
                        "nftAddress": "0x17dbFE52A53b3EAe5f583C754C85872DB686D5f6",
                        "sellNonce": "96343776483007525664134026473085302561924967347507312775902417741319346015632",
                        "tokenId": 442,
                        "paymentAmount": "22000000000000000",
                        "paymentTokenAddress": "0x76ad147d23489541ab3BE66DAC9cBEe30773059a"
                    }]
                },
            })
            console.log("Signature=", sig);
        } catch (e) {
            console.log(e)
        }
    }

    const checkSigWrongMessage = async () => {
        try {
            const sig = await signTypedData(config,{
                types: {
                    "BatchSellData": [{"name": "tree", "type": "SellData[2][2]"}],
                    "SellData": [{"name": "seller", "type": "address"}, {
                        "name": "nftAddress",
                        "type": "address"
                    }, {"name": "tokenId", "type": "uint256"}, {
                        "name": "sellNonce",
                        "type": "uint256"
                    }, {"name": "expirationDate", "type": "uint256"}, {
                        "name": "paymentAmount",
                        "type": "uint256"
                    }, {"name": "paymentTokenAddress", "type": "address"}]
                },
                primaryType: 'BatchSellData',
                domain: {
                    "name": "KreatorhoodMarketplace",
                    "version": "1",
                    "chainId": 11155111,
                    "verifyingContract": "0x548aBD5A10a6f0ee52f7E6f0DB6334df2528d96A"
                },
                message: {
                    "tree": [[{
                        "seller": "0x4b954980694a8c19fd4c6341995c8b9aebbcf64a",
                        "expirationDate": 1713430053,
                        "nftAddress": "0x17dbFE52A53b3EAe5f583C754C85872DB686D5f6",
                        "sellNonce": "22409586726053925687053795267871061229810425483699366315605899207206649592577",
                        "tokenId": 441,
                        "paymentAmount": "22000000000000000",
                        "paymentTokenAddress": "0x76ad147d23489541ab3BE66DAC9cBEe30773059a"
                    }, {
                        "seller": "0x4b954980694a8c19fd4c6341995c8b9aebbcf64a",
                        "expirationDate": 1713430053,
                        "nftAddress": "0x17dbFE52A53b3EAe5f583C754C85872DB686D5f6",
                        "sellNonce": "52653443617037774908631578769734425929777340225118963990635677660812116512922",
                        "tokenId": 440,
                        "paymentAmount": "22000000000000000",
                        "paymentTokenAddress": "0x76ad147d23489541ab3BE66DAC9cBEe30773059a"
                    }], [{
                        "seller": "0x4b954980694a8c19fd4c6341995c8b9aebbcf64a",
                        "expirationDate": 1713430053,
                        "nftAddress": "0x17dbFE52A53b3EAe5f583C754C85872DB686D5f6",
                        "sellNonce": "54008815419835043773254887164898159885350830029154976063110124752468589835409",
                        "tokenId": 442,
                        "paymentAmount": "22000000000000000",
                        "paymentTokenAddress": "0x76ad147d23489541ab3BE66DAC9cBEe30773059a"
                    }, {
                        "seller": "0x0000000000000000000000000000000000000000",
                        "nftAddress": "0x0000000000000000000000000000000000000000",
                        "tokenId": 0,
                        "sellNonce": "0",
                        "expirationDate": 0,
                        "paymentAmount": "0",
                        "paymentTokenAddress": "0x0000000000000000000000000000000000000000"
                    }]]
                }
            })
            console.log("Signature=", sig);

        } catch (e) {
            console.log(e)
        }
    }
    return <>
        <button onClick={checkSigWrongMessage}>Check sig - Wrong message</button>
        <button onClick={checkSigCorrectMessage}>Check sig - Correct message</button>
    </>
}

export default TestSig;