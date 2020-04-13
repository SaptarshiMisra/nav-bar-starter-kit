import {GOOGLE_API_KEY} from './ApiKey.js';
import {cognito} from './cognito';

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
    cognito: cognito
  }
