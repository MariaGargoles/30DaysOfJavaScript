/*Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    ####### */

    for (let i = 1; i <= 7; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '#';
        }
        console.log(line);}