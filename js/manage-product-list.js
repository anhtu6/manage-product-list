let productname = ['Sony Xperia','Samsung Galaxy','Nokia 6','Xiaomi Blackshark ','Apple iPhone 7'] ;
function showproduct() {
    let html ='';
    html+='<th><td colspan="3" style="text-align: left"><b>Product name</b></td>  <td style="color:red;">'+productname.length+ ' products</td></th>';
    for (i=0;i<productname.length;i++){
        html+='<tr> <td>'+productname[i]+'</td>';
        html+= '<td > <button id="'+i+'" onclick="editProduct(this.id)'+'">Edit</button> </td>';
        html+= '<td > <button onclick="deleteProduct(this.id)">Delete</button> </td> <td></td> </tr>';
    }
    document.getElementById('table1').innerHTML =html;
}
showproduct();
function addProduct() {
    let newproduct = document.getElementById('content').value;
    productname.push(newproduct);
    showproduct();
}
function deleteProduct(m) {

    productname.splice(m,1);
    showproduct();

}
function editProduct(n) {

     let text = prompt('Nhap ten can thay doi');
     productname[n] = text;
    showproduct();
}