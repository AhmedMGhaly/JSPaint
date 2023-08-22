





// #Colors
var orange = "orange";
var yellow = "#f1dd38";
var brown  = "brown";
var phosfor= "#C1C3C6";
var black  = "black";
var virtual= "brown";


// Box1(orange)      Box2(yellow)





// Box3(yellow)      Box4(orange)




// Box1
box(ctx,0,0,360/2,360/2,orange);
// layer2
box(ctx,360*1/4,360*1/4,360/2,360/2,yellow);
// layer3
box(ctx,0,0,360/4,360/4,yellow);





// Box2
box(ctx,360/2,0,360,360/2,yellow);
// layer2
box(ctx,360*1/2,360*1/4,360*1/4,360*1/2,orange);
// layer3
box(ctx,270,0,360,360*1/4,orange);







// Box3
box(ctx,0,360/2,360/2,360,yellow);
// layer2
box(ctx,360*1/4,360*1/2,360*1/2,360*1/4,orange);
// layer3
box(ctx,0,270,90,360,orange);






// Box4
box(ctx,360/2,360/2,360,360,orange);
// layer2
box(ctx,360*1/2,360*1/2,360*1/4,360*1/4,yellow);
// layer3
box(ctx,270,270,360,360,yellow);





// width


drawLine(ctx,0,90,360,90,virtual,10);
drawLine(ctx,0,180,360,180,virtual,10);
drawLine(ctx,0,270,360,270,virtual,10);


// height


drawLine(ctx,90,0,90,360,virtual,10);
drawLine(ctx,180,0,180,360,virtual,10);
drawLine(ctx,270,0,270,360,virtual,10);







