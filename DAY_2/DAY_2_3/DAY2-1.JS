    //Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
    
    let str = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
    let strsl = str.split(" ");
    let word = "love";
    
    let count = strsl.filter(word => word.toLowerCase().includes(word.toLowerCase())).length;
    
    console.log("The word '" + word + "' appears " + count + " times in the sentence.");
    
