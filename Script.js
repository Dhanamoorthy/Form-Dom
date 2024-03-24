function form(tagname){
    var frm = document.createElement(tagname);
    return frm
}
function formgrp(tagname,attrname,attrvalue){
    var grp = document.createElement(tagname)
    grp.setAttribute(attrname,attrvalue)
    return grp;
}

function labels(tagname,attrname,attrvalue,content){
    var lbl = document.createElement(tagname)
    lbl.setAttribute(attrname,attrvalue)
    lbl.innerHTML = content;
    return lbl;
}
function linebreak(tagname){
    var brk=document.createElement(tagname)
    return brk
}

function inputs(tagename,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
    var inp = document.createElement(tagename)
    inp.setAttribute(attrname,attrvalue)
    inp.setAttribute(attrname1,attrvalue1)
    inp.setAttribute(attrname2,attrvalue2)
    inp.setAttribute(attrname3,attrvalue3)
    inp.setAttribute(attrname4,attrvalue4)
    return inp
}

function select(tagname, id, className) {
    var sel = document.createElement(tagname);
    sel.id = id;
    sel.className = className;
    return sel;
}

function option(value, text) {
    var opt = document.createElement("option");
    opt.value = value;
    opt.text = text;
    return opt;
}

function button (tagname,attrname,attrvalue,attrname1,attrvalue1,innerHTML){
    var btn = document.createElement(tagname)
    btn.setAttribute(attrname,attrvalue)
    btn.setAttribute(attrname1,attrvalue1)
    btn.innerHTML = innerHTML
    return btn
}

var group = formgrp("div" ,"class","form-group")


var br = linebreak("br")
var form = form("form")
var Firstname=labels("label","for","f.name","Firstname")
var fname = inputs("input","type","text","class","form-control","id","fname")

var Lastname=labels("label","for","l.name","Lastname") 
var lname = inputs("input","type","text","class","form-control","id","lname")

var Address=labels("label","for","add","Address") 
var address = inputs("input","type","text","class","form-control")

var pincode=labels("label","for","pin","Pincode")
var pin = inputs("input","type","number","class","form-control") 

var gender = labels("label", "for", "gend", "Gender");
var gendr = select("select", "inputState", "form-control");
var male = option("value1", "Male");
var female = option("value2", "Female");
var others = option ("value3","Others")
gendr.append(male,female,others)

var sta = labels("label","for","sta","State")
var st = select("select", "inputState", "form-control");
var TamilNadu = option("value1", "Tamilnadu");
var Kerala = option("value2", "Kerala");
var up= option ("value3","Utharapradesh")
var ap = option("value4", "Andrapradesh");
var od = option("value5", "Odissa");
var mu = option ("value6","Mumbai")
st.append(TamilNadu,Kerala,up,ap,od,mu)



var cof = labels("label","for","cof","Choice of Foods");
var coo = select("select","inputState","form-control");
var d = option("value1","Dosa");
var b = option("value2","Briyani");
var p = option("value3","pizza");
coo.append(d,b,p);




br
var cou = labels("label","for","sta","Country")
var co = select("select", "inputState", "form-control");
var India = option("value1", "India");
var usa = option("value2", "america");
var it= option ("value3","Italy")
var can = option("value4", "Canada");
var aus = option("value5", "Austria");
var ja = option ("value6","Japan")
co.append(India,usa,it,can,aus,ja)

var btn =button ("button","type","button","class","btn btn-primary","submit")

form.append(group,Firstname,br,fname,br,Lastname,lname,br,
    Address,address,gender,gendr,cof,coo,br,sta,st,pincode,pin,cou,co,br,btn)
// form.append(cof,coo)
document.body.append(form)


br
br
br
function div (tagname,attrname,attrvalue){
    var dv = document.createElement(tagname);
    dv.setAttribute(attrname,attrvalue)
    return dv
}
var dv = div("div","id","tablecontainer")

function table(tagname,attrname,attrvalue){
    var tb = document.createElement(tagname)
    tb.setAttribute(attrname,attrvalue)
    return tb
}

var tb = table("table","class","table")
function head (tagname){
    var h = document.createElement(tagname)
    return h
}
var rh = head("thead")

function row (tagname){
    var r = document.createElement(tagname)
    return r
}

var r = row("tr")

function th(tagname,attrname,attrvalue,innerHTML){
    var th = document.createElement(tagname)
    th.setAttribute(attrname,attrvalue)
    th.innerHTML = innerHTML;
    return th
}

var th0 = th("th","scope","col","firstname")
var th1 = th("th","scope","col","lastname")
var th2 = th("th","scope","col","Address")
var th3 = th("th","scope","col","Gender")
var th4 = th("th","scope","col","Choice of Foods")
var th5 = th("th","scope","col","State")
var th6= th("th","scope","col","Pincode")
var th7= th("th","scope","col","Country")

rh.append(r,th0,th1,th2,th3,th4,th5,th6,th7)
tb.append(rh)
// bod.append(r,td,td,td,td,td,td,td,td,r,td,td,td,td,td,td,td,td,r,td,td,td,td,td,td,td,td)
document.body.append(dv,tb)


function body (tagname){
    var h = document.createElement(tagname)
    return h
}

var bod = body("tbody")


function data(tagname){
    var d = document.createElement(tagname)
    return d
}

var td = data("td")



var r1 = document.getElementsByClassName("table")
var row1 = r1.insertRow(0)