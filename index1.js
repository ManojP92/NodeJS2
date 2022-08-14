const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/HRDatabase').then(()=>console.log('Connected to MongoDB...!'))
.catch(err=>console.error('Could not establish a connection!',err));

const employeeSchema = new mongoose.Schema({
    id : Number,
    name : String,
    isReady : Boolean,
    tags : [String]
})

const Employee = mongoose.model('Employee', employeeSchema);

async function createEmployee(){
const employee = new Employee({
    id : 3,
    name : 'Roy',
    isReady : false,
    tags : ['NodeJS, Angular, Java, Python']
})

const result = await employee.save();
console.log(result);
}
 //createEmployee();

async function viewEmployee(){
    const view = await Employee.find({id:001});
    console.log(view);
}
//viewEmployee();

async function updateEmployee(){
    const update =await Employee.updateOne({id:2}, {$set:{name: "John"}});
    console.log(update,"record updated!");
}
// updateEmployee();
 async function deleteEmployee(){
    const deleteE = await Employee.deleteOne({id:3});
    console.log(deleteE,"record deleted!")
 }
//  deleteEmployee();