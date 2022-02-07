# CSE356
Yejin Shin's personal codes for CSE 356: Cloud Networking

## How to connect to server
```ssh root@<IP Address>```

## How to create SSH Key
reference: https://upcloud.com/community/tutorials/use-ssh-keys-authentication/
</br>
Note: ```chmod 700 ~/.ssh``` is very important!! This cmd makes computer to not permanantely save the public key to ```know_hosts```. 
</br>
Copy and paste the public key to UpCloud's SSH Key pannel and make server with it. 
- Make Ubuntu server. This creates ```authorized_key``` file in the ```.ssh``` directory. 

## Create Node.js app 
- Install Express and use router
- If an image does not get loaded, make sure you need to set router for the image as well. </br>
ex) GET yejshin/.../.../src/puppy.jpg``` also needs to get routed to folder. 
- use ```path``` library to route files. ```res.send()``` or ```res.sendFile()``` should be used. Although <b> image <b> is included in </b>.html</b> file, client is still making <b>GET</b> request to the server for the image. 

## Watch Out for Tricky Spellings!!
