//Hi - https://www.thailandcodes.cf
const
            Discord       
                                = require           
      ("discord.js");
const                   client              = new      
                Discord.              Client();
const 
                        prefix = '-';


client.             on       
                    ("ready", () =>{
 console                
        .log(`Logged in as          
                            ${client.           
             user.      
                        tag}`)
}) 



client.         
        on("message",    
                        message =>{

    if(message
                .content          .startsWith("hi")){

    message                 .channel.
                
                    send(`Hi ${message.             
                        
         author}`)
    }
})

client.         
        on("message",    
                        message =>{

    if(message
                .content          .startsWith("hi")){
const  embed                  = new                              
                 Discord                    .        
                            MessageEmbed
        ()
.               setDescription(`Hi ${message.             
                        
    author}`)
                    message                 .channel.
                
                    send            
                                    (embed)
    }
})

client          .          login                    
                            
('TOKEN')
