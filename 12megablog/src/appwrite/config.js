import { Client, ID, Databases, Storage, Query } from "appwrite";
import { conf } from "../conf/conf.js";

export class Service{
    Client=new Client();
    Databases
    bucket

     constructor(){
            this.Client
             .setEndpoint(conf.appWriteUrl)
             .setProject(conf.appWriteProjectId);
            
             this.databases=new Databases(this.Client);
             this.bucket=new Storage(this.Client);
    
        }
    async createPost({title,slug,content,featuredImage,userId,status}){
         try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
         } catch (error) {
            console.log("error in createPost:", error);
         }
    }
    async updatePost(slug,{title,content,featuredImage,userId,status}){
          try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
          } catch (error) {
            console.log("error in updatePost:", error);
          }
    }

    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error in deletePost:", error);
            return false;
        }
    }
    
    async getPost(slug){
       try {
          return this.Databases.getDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug
          )
       } catch (error) {
        console.log("error in getPost",error)
        return false;
        
       }
    }

    async getPosts(queries = [Query.equal("status","active")]){
       try {
         return await this.databases.listDocuments(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            queries
         )
       } catch (error) {
         console.log("error in getposts",error)
         return false;
       }
    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            
        }
    }

    async deleteFile(){
        
    }
        
}

const service=new Service();

export default service;