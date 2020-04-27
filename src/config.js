import {GOOGLE_API_KEY} from './ApiKey.js';
export const APP=
            {
                name:'Daily Jobs',
                menu:[
                       {
                        name:'Home',
                        icon:'fa fa-home'
                       },
                       {
                        name:'Profile',
                        icon:'fa fa-user'
                       },
                       {
                        name:'Settings',
                        icon:'fa fa-cog'
                       },
                       {
                        name:'History',
                        icon:'fa fa-history'
                       }
                    ],
                googleMapKey:GOOGLE_API_KEY
            }
export const AWS = {
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "YOUR_API_GATEWAY_REGION",
      URL: "YOUR_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_NmkXk7EqH",
      APP_CLIENT_ID: "7aiant16qo1upladau3mhn7p8r",
      IDENTITY_POOL_ID: "ap-south-1:b3649abb-b03c-4a3d-95d6-8e7d620249b2"
    }
  }
