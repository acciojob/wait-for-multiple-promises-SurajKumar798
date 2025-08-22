//your JS code here. If required.
 function createPromise(index) {
      const delayTime = (Math.random() * 2 + 1).toFixed(3);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name: `Promise ${index}`, time: parseFloat(delayTime) });
        }, delayTime * 1000);
      });
    }

    
    const promises = [createPromise(1), createPromise(2), createPromise(3)];
    const startTime = performance.now();

    
    Promise.all(promises).then((results) => {
      const endTime = performance.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(3);

      const output = document.getElementById("output");
      output.innerHTML = "";

      
      results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
        output.appendChild(row);
      });

     
      const totalRow = document.createElement("tr");
      totalRow.innerHTML = `<td><strong>Total</strong></td><td>${totalTime}</td>`;
      output.appendChild(totalRow);
    });