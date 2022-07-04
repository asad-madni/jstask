// #The perimeter of Square = P = 4a
// Where ‘a’ is the length of the sides of square

//Q1
let a = 12
perimeterOfSquare = 4*a
console.log(perimeterOfSquare)

//Q2 -Perimeter of Rectangle = P = 2(l + b)
// Where ‘l’ is Length and ‘b’ is Breadth

let length =5
let Breadth=12
let perimeterOfRectangle = 2*length*Breadth
console.log(perimeterOfRectangle)

//Q3 - The area of Square = A = a2
// Where ‘a’ is the length of the sides of a Square

let slength = 32
let areaOfSquare = 2*a
console.log(areaOfSquare)

//Q4-The area of Rectangle = A = l × b
// here ‘l’ is Length and ‘b’ is breadth

let rl=3
let bl=34
let AreaOfRectangle = rl*bl
console.log(rl*bl)
//Q5 - Area of Triangle = A = ½ × b × h
// Where ‘b’ is the base of the triangle and ‘h’ is the height of the triangle\
let base =234
let height =231
let AreaOfTrianlge = 1/2*base*height
console.log(AreaOfTrianlge)

//Q6 -Area of Trapezoid = A = ½ × (b1 + b2) × h
// Where b1 and b2 are the bases of the Trapezoid; h = height of the Trapezoid
let b1 =342
let b2=89
let AreoOfTrapezoid = 1/2*(b1+b2)
console.log(AreoOfTrapezoid)

//Q7 -Area of circel =pie*r sqaure
let pie =3.14
let r =54
let circle = pie*r*r
console.log(circle)

//Q8 - Circumference of Circle = A = 2πr
// Where ‘r’ is the radius of a Circle

let pieC =3.14
let rc= 34
let Circumference = 2*pie*r
console.log(Circumference)

//Q9 - Surface Area of Cube = S = 6a2
// Where ‘a’ is the length of the sides of the Cube

let ac =35
areaCube = 6*ac*ac*ac
console.log(areaCube)

// Q10,11,12 The curved surface area of Cylinder = 2πrh
// The total surface area of Cylinder = 2πr(r + h)
// The volume of Cylinder = V = πr2h

let radius = 342
let piecyl =3.14
let hcyl =89
let curved=2*piecyl*radius*hcyl
let surface=2*piecyl*radius*(radius+hcyl)
let volume =piecyl*radius*2*hcyl

console.log(curved+" "+surface+" "+volume)

//Q13,14,15
// The curved surface area of a cone = πrl
// Total surface area of cone = πr(r + l) = πr[r + √(h2 + r2)]
// Volume of a Cone = V = ⅓ × πr2h

let cr = 3
let cpie=3.14
let cl =34
let ch =9
let surfaceCOne =cpie*cr*cl
let Tsurface = cpie*r*(cr+cl)
let volCone =1/2*cpie*cr*2*ch

console.log(surfaceCOne+" "+Tsurface+" "+volCone)

// Q16,17
// Surface Area of a Sphere = S = 4πr2
// Volume of a Sphere = V = 4/3 × πr

let sr =324
let spie =3.14
let SurfaceAreaOfSphere =4*spie*sr*2
let VolumeOfSphere =4/3*spie*sr

console.log(SurfaceAreaOfSphere+" "+VolumeOfSphere)