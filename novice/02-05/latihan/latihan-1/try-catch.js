try {
  alert("try");
  if(confirm("Ingin menampilkan error?")) throw "ini error";
}catch(err){
  alert(err)
}finally{
  alert("finally");
};
