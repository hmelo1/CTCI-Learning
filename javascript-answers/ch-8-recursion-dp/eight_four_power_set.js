//Power Set: Write a method to return all subsets of a set.

let get_bit = function(num, bit){
    //binary left shift
    // 0101 << 1 = 1010
    // 5 << 1 = 10
    let temp = (1 << bit);
    //bitwise AND
    //0101 (5) & 0001
    //temp = 0001
    //0101 & 0110
    //temp = 0100
    temp = temp & num;
    if(temp === 0 ){
        return 0;
    }
    return 1;
}

let get_all_subsets = function(values, subsets){
    let subsets_count = Math.pow(2, values.length);
    for(let i = 0; i < subsets_count; i++){
        let set = new Set([]);
        for(let j = 0; j < values.length; j++){
            if (get_bit(i, j) === 1){
                set.add(values[j]);
            }
        }
        subsets.push(set);
    }
}