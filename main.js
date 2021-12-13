var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg%22,%22https://i.postimg.cc/qqyYvVbq/grandpa.jpg","me.jpg","papa.jpeg","mom.jpeg","gparents.jpeg","gma.jpeg"]
var names = ["Family Book","Shikhar Bakshi","Naresh Bakshi","Shaveta Sharda","Swarn Bakshi (Grandma) & S.K.Bakshi (Grandpa)","Swarn Bakshi (Grandma)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array)
      
        {
          i = 0;
        }
      
    var updatedImage = images[i];
    var updatedName =  names[i] ;
    
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}