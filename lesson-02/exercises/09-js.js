let score = 91;

switch (true) {
    case score < 40:
        console.log("Xếp hạng: Newbie");
        break;
    case score < 70:
        console.log("Xếp hạng: Intermediate");
        break;
    case score < 90:
        console.log("Xếp hạng: Pro");
        break;
    default:
        console.log("Xếp hạng: Legend");
}