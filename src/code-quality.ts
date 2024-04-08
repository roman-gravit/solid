////////////////////////
// Variables

// Bad
const yymmdd = new Date();
// Good
const current_date = new Date();


const locations = ["Austin", "Boston", "Chicago"]

// Bad
locations.forEach(l => {
	console.log(l);
});
// Good 
locations.forEach(location => {
	console.log(location);
});


////////////////////////
// Methods

// Bad
function GetUserInfo() {
	//
}
function GetClientInfo() {
	//
}
function GetCustomerFromDb() {
	//
}

// Good
function GetUser() {
	//
}


////////////////////////
// named consts
setTimeout(()=>{ }, 3600);

const SECONDS_IN_A_HOUR = 3600;
setTimeout(()=>{ }, SECONDS_IN_A_HOUR);


////////////////////////
// use default values for function arguments


////////////////////////
// correct naming of the function

//bad 
function AddToDate(date: Date, month: number) {
	//
}
//good 
function AddMonthToDate(date: Date, month: number) {
	//
}


////////////////////////
// Do nit use flag as function parameter
// and make different actions inside function depending on that flag

// Bad
function CreateFile(fs: any, path: any, isTemp: any) {
	if (isTemp) {
		fs.create("/temp" + path);
	} else {
		fs.create( path);
	}
}
// Good
function CreateTempFile(fs: any, path: any) {
	fs.create("/temp" + path);
}
function CreateRegularFile(fs: any, path: any) {
	fs.create(path);
}


////////////////////////
// Avoid negative namings

// Bad 
const IsDomNodeNotPresent: boolean = false;

// Good 
const IsDomNodePresent: boolean = false;


////////////////////////
// Remove *dad* code parts