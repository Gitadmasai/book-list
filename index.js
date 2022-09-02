let formData=[]

function submitData(){
    // formData.preventDefault()
    let BookName = document.getElementById('name').value
    let Author_Name = document.getElementById('author').value
    let Book_Description = document.getElementById('desc').value
    let Add_Dates = document.getElementById('added').value
    let Select_Category = document.getElementById('category').value
    let Books_Price = document.getElementById('price').value

    let object={
    Book_name:BookName,
    Author_Name:Author_Name,
    Book_Description:Book_Description,
    Add_Dates:Add_Dates,
    Select_Category:Select_Category,
    Books_Price:Books_Price
}
formData.push(object);
console.log(object)
// localStorage.setItem("book-list", JSON.stringify(formData));
localStorage.setItem('book-list', JSON.stringify(formData));
console.log(formData)
}