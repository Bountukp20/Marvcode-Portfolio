// Importing node.js file system, 
// util, crypto module 
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')
  
// Convert callback based scrypt method
// to promise based method
const scrypt = util.promisify(crypto.scrypt)
  
class Repository {
  
    constructor(filename) {
  
        // The filename where datas are
        // going to store
        if (!filename) {
            throw new Error(
'Filename is required to create a datastore!')
        }
  
        this.filename = filename
  
        try {
            fs.accessSync(this.filename)
        } catch (err) {
  
            // If file not exist it is created
            // with empty array
            fs.writeFileSync(this.filename, '[]')
        }
    }
  
    // Method to fetch all records
    async getAllRecords() {
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                encoding: 'utf8'
            })
        )
    }
  
    async create(attrs) {
        const records = await this.getAllRecords()
        const { email, password } = attrs
  
        // SALT
        const salt = crypto.randomBytes(8).toString('hex')
  
        // HASHED buffer
        const hashedBuff = await scrypt(password, salt, 64)
  
        // HASHED and SALTED password
        const hashedSaltPassword = 
            `${hashedBuff.toString('hex')}.${salt}`
  
        // Create new record with hashed and 
        // salted password instead of raw password
        const record = {
            ...attrs,
            password: hashedSaltPassword
        }
  
        records.push(record)
  
        // Write all records to the database
        await fs.promises.writeFile(
            this.filename,
            JSON.stringify(records, null, 2)
        )
  
        return record
    }
}
  
module.exports = new Repository('datastore.json')