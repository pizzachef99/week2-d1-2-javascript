let student1={
    firstName:"Alessandro",
    lastName:"D'assenzo",
    age:24,
    hasWebCam:true,
  }
    
    let student2={
        firstName:"Alberto",
        lastName:"macis",
        age:22,
        hasWebCam:true,
        }
        
        let student3={
            firstName:"Michela",
            lastName:"Kawloski",
            age:25,
            hasWebCam:true,
            }
            
            console.log(student1.firstName, student2.firstName,);
            
            
            //cambiare aggettivi
  
            student1.hasWebCam=false;
  console.log(student1.hasWebCam, student2.hasWebCam, student3.hasWebCam );
  student1.hasWebCam= !student1.hasWebCam;
  console.log(student1.hasWebCam, student2.hasWebCam, student3.hasWebCam );
  
  
  //aggiungere ogettivi
            
  console.log(student1.location); 
  student1.location="lazio";
  console.log(student1.location); 
  student1.propertyToRemove= null;
  console.log(student1); 
  
  
  //cancellare propietà
  
  delete student1.location;
  console.log(student1);
  
  
  let student4= {};
  Object.assign(student4, student3);
  console.log( student4, student3);
  
  const _student4 = Object.assign({}, student3);
  console.log("_student4 prima",_student4);
  
  _student4.firstName= "Eleonora";
  _student4.lastName= "Mattera";
  delete _student4.propertyToRemove;
  console.log(student4,"student4 dopo",_student4);