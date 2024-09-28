for (const property in statistics) {
    if (property.charAt(0) == 'r' || statistics[property] % 2 == 1){
        console.log(`${statistics[property]}`);
    }

    }