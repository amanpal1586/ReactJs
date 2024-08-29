import conf from '../conf/conf'
import {ID, Client, Account} from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)  //api end ponit
            .setProject(conf.appwriteProjectId)  
        this.account = new Account(this.client)
            
    }

    async createAccount({email,password,name}){
        try {
         const userAccount = await this.account.create(ID.unique(),email,password,name);
         if(userAccount){
            // call another method
            this.loginAccount({email,password})
            
         }else{
            return userAccount;
         }
        } catch (error) {
            throw error;
        }
    }

    async loginAccount({email, password}){
        try {
          return  await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error  
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get()
        } catch (error) {
            console.log("appwrite service:", error)
        }

        return null;
    }


    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(error)
        }
    }
}

const authService =  new AuthService();

export default authService;



// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<PROJECT_ID>');

// const databases = new Databases(client);

// const promise = databases.createDocument(
//     '<DATABASE_ID>',
//     '[COLLECTION_ID]',
//     ID.unique(),
//     {}
// );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });

//