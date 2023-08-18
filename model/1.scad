difference(){
    scale([1.4,1.4,1]) color([1,0.3,0]) sphere(r=40);
    sphere(r=38);
    translate([0,0,5]) cylinder(h=35,r=20);
    translate([0,0,-55]) cylinder(h=40,r=20);
}


difference(){
    translate([0,0,36]) cylinder(h=5,r=20);
    translate([0,0,30]) cylinder(h=15,r=16);
}

difference(){
    translate([0,0,-41]) cylinder(h=5,r=20);
    translate([0,0,-50]) cylinder(h=15,r=16);
}

translate([0,0,-39.5]) cylinder(h=1,r=16);
translate([0,0,38.5]) cylinder(h=1,r=16);
translate([0,0,38.5]) color([1,0.5,0]) cylinder(h=60,r=2);
translate([0,0,-69.5]) color([1,0.5,0]) cylinder(h=30,r=1);

difference(){
    translate([0,0,-79.5]) color([1,0.5,0]) cylinder(h=10,r=5);
    translate([0,0,-79.6]) cylinder(h=10,r=3);
}

for (i = [0:8:360]){
    translate([18*cos(i),18*sin(i),-71]) color([1,0.3,0]) cylinder(h=30,r=1);
}

for (i = [0:15:360]){
    translate([4*cos(i),4*sin(i),-104.5]) color([1,0.3,0]) cylinder(h=25,r=0.5);
}

for (i = [0:30:179]){
    difference(){
        scale([1.4,1.4,1]) rotate([90,0,i]) cylinder(h=1,r=41);
        translate([0,0,-100]) cylinder(h=200,r=16);
    }
}