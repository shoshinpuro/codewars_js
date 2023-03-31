function towerBuilder(nFloors) {
    let bricks = '*', 
        spaces = ' '.repeat(nFloors - 1), 
        tower = [];
  
    for(let i = 0; i < nFloors; i++) { 
      let space = spaces.substr(0, nFloors - i - 1); 
      tower.push(space + bricks + space); 
      bricks+='**'; 
    }
  
    return tower;
  }