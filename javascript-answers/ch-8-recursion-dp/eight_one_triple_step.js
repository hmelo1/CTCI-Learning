//Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. 
//Implement a meethod to count how many possible ways the child can run up the stairs.

//Bottom-up
let triple_step = function(num){
    if(num <= 0){
        return 0
    }
    let current_sum = 0;
    let result = [0,0,0,1];

    for(let i = 0; i < num; i++){
        current_sum = result[1] + result[2] + result[3];
        result[0] = result[1]
        result[1] = result[2]
        result[2] = result[3]
        result[3] = current_sum
    }
    return result[3]
}

//memoized & recursive
let triple_step_rec = function(num, result){
    if(num < 0){
        return 0
    }

    if(result[num] > 0){
        return result[num];
    }

    result[num] = triple_step_rec(num-1, result) +
                  triple_step_rec(num-2, result) +
                  triple_step_rec(num-3, result);
    return result[num];
}

let triple_step = function(num){
    if(num <= 0){
        return 0;
    }
    let result = [];
    for(let i = 0; i < num+1; i++){
        result[i] = 0;
    }

    result[0] = 1;

    triple_step_rec(num, result);

    return result[num]
}

