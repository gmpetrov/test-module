import path from 'path'
const pjsonPath = path.resolve('./package.json')
const pjson = require(pjsonPath)

export default function printModuleName() {
    console.log("this is test-module v42");
    console.log(`package.json version = ${pjson.version}`);
}

printModuleName()
