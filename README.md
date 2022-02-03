# CSE356
Yejin Shin's personal codes for CSE 356: Cloud Networking

## How to connect to server
```ssh root@<IP Address>```

## How to create SSH Key
reference: https://upcloud.com/community/tutorials/use-ssh-keys-authentication/
Note: ```chmod 700~/.ssh``` is very important!! This cmd makes computer to not permanantely save the public key to ```know_hosts```. 
Copy and paste the public key to UpCloud's SSH Key pannel and make server with it. 
- Make Ubuntu server. This creates ```authorized_key``` file in the ```.ssh``` directory. 
