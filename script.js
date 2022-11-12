function Severity() {
    if (document.getElementById('CAL').value == 'naCal') {
        document.getElementById('RBL').style.display = 'block';
    } else {
        document.getElementById('RBL').style.display = 'none';
    }
}
function Progression() {
    if (document.getElementById('RBL-CAL').value == 'NoRBL-CAL'){
        document.getElementById('secundary-criteria').style.display='block';
    } else {
        document.getElementById('secundary-criteria').style.display = 'none'; 
    }
}
function RehabExpl(){
    if (document.getElementById('ST4').checked == true)
    {    document.getElementById('Compl-expl').style.display='block';
    }
    else {
        document.getElementById('Compl-expl').style.display='none' 
    }
}
document.addEventListener.onchange

const CAL = document.getElementById('CAL');
let a
    CAL.onchange = (ev) => {
    a = ev.target.value;
    console.log(a)
    } //Gets value of CAL as low, medium or high

const RBL = document.getElementById('sev-lev-2');
let b
    RBL.onchange = (ev) => {
    b = ev.target.value;
    console.log(b)
    } //Gets value of RBL as low, medium or high

const TL = document.getElementById('sev-lev-3');
let c
    TL.onchange = (ev) => {
    c = ev.target.value;
    console.log(c)
    } //Gets value of tooth loss as low, medium or high

const MaxPD = document.getElementById('MaxPD');
let d
    MaxPD.onchange = (ev) => {
    d = ev.target.value;
    console.log(d)
    } //Gets value of maximum pocket depth as low, medium or high

const BL = document.getElementById('type-bl');
let e
    BL.onchange = (ev) => {
    e = ev.target.value;
    console.log(e)
    }  //Gets value of type of bone loss as low or high

const Furc =  document.getElementById('ST3a');
let f
    Furc.onchange = (ev) => {
    f = ev.target.value;
    console.log(f)
    } //Gets Value of furcation as low, medium or high

const RiDe =  document.getElementById('ST3b');
let g
    RiDe.onchange = (ev) => {
        g = ev.target.checked
    } //checks if Moderate ridge defects is ticked in (true) or not

const ComplReh =  document.getElementById('ST4');
let h
    ComplReh.onchange = (ev) => {
        h = ev.target.checked
    } //checks if Need complex rehab is ticked in (true) or not

const extent = document.getElementById('extent')
let extens = " "
    extent.onchange = (ev) =>{
        extens= ev.target.value;
    } //takes value of extention (Localized or Generalized)

const MIP = document.getElementById('MI')
let i 
MIP.onchange = (ev) => {
    i= ev.target.checked
    }

let i2 = "."
function MolIn(){
    if (i==true){i2="."}
    else {i2=' with Molar Incisor pattern.'}
}//Adds Molar incisor pattern, if selected

const RblCal = document.getElementById('RBL-CAL');
let ag
    RblCal.onchange = (ev) => {
    ag = ev.target.value;
    console.log(ag)
    } //Gets value of Rx BL/CAL as low, medium or high

const BLAge = document.getElementById('BlAge');
let bg
    BLAge.onchange = (ev) => {
    bg = ev.target.value;
    console.log(bg)
    } //Gets value of bone loss/age as a number

const Pheno = document.getElementById('phenotype');
let cg
    Pheno.onchange = (ev) => {
    cg = ev.target.value;
    console.log(cg)
    } //Gets value of phenotype (destruction vs biofilm) as low, medium or high

const Cigar = document.getElementById('smoke');
let dg
    Cigar.onchange = (ev) => {
    dg = ev.target.value;
    console.log(dg)
    } //Gets value of phenotype (destruction vs biofilm) as low, medium or high

const Diab = document.getElementById('diabetes');
let eg
    Diab.onchange = (ev) => {
    eg = ev.target.value;
    console.log(eg)
    } //Gets value of phenotype (destruction vs biofilm) as low, medium or high


function debug(){
    if ((a=="low" || b=="low")&& c=="low" && d=="low" && e=="low" && f=="low" && g!=true && h!=true) 
        {document.getElementById('stageDef').innerHTML = extens+" "+"Periodontitis Stage I"+Grade+i2}
    else if ((a=="low" || b=="low")&& c=="low" && d=="medium" && e=="low" && f=="low" && g!=true && h!=true) 
        {document.getElementById('stageDef').innerHTML =extens+" "+ "Periodontitis Stage II"+Grade+i2}
    else if ((c=="medium"||d=="high"||e=="high" || f=="medium"||g==true)&& (c!="high" && f!="high" && h!=true)) 
        {document.getElementById('stageDef').innerHTML = extens+" "+"Periodontitis Stage III"+Grade+i2}
    else if ((c=="high"||f=="high"||h==true))  
        {document.getElementById('stageDef').innerHTML = extens+" "+"Periodontitis Stage IV"+Grade+i2}
    else if ((a==undefined||b==undefined) ||c==undefined ||d==undefined ||e==undefined ||f==undefined || extens==undefined  )
        {alert("Please fill all the boxes")}
    else 
        {document.getElementById('stageDef').innerHTML =extens+" "+ "Periodontitis Stage II"+Grade+i2}
}
let Grade=""
function grade(){
    if ((ag=="low" || bg=="low"||cg=="low")&& dg=="low" && eg=="low"){Grade=" Grade A"}
    else if ((ag=="low" || bg=="low"||cg=="low")&& ((dg=="medium" || dg=="high") || (eg=="medium" || eg=="high"))){Grade=" Grade B"}
    else if ((ag=="medium" || bg=="medium"||cg=="medium")&& ((dg=="low" || dg=="medium")&& (eg=="low" || eg=="medium"))){Grade=" Grade B"}
    else if ((ag=="medium" || bg=="medium"||cg=="medium")&& dg=="high" || eg=="high"){Grade=" Grade C"}
    else if ((ag=="high" || bg=="high"||cg=="high")){Grade=" Grade C"}
    else  {Grade="" }
}