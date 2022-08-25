       const RE_MULTILINE_COMMENT = /^\/\*(.|\n)*\*\/(\n|$)/g;
                                  
                       /**
                       *
                       * @param {string} input
                       */
                      function format(input) {
                           let width = 0;
               for (const line of input.split('\n')) {
                    const w = line.trim().length;
                      if (w > width) width = w;
                                  }
                                  
                           // Add padding
                             width += 2;
       let output = '', chunks = [], text = new String(input);
                      while (text.length > 0) {
         let match = text.match(RE_MULTILINE_COMMENT)?.[0];
           if (!match) match = text.split('\n')[0] + '\n';
                text = text.substring(match.length);
                                  
                    chunks.push(match.trimEnd());
                                  }
                                  
                    for (const chunk of chunks) {
                         let chunkWidth = 0;
               for (const row of chunk.split('\n')) {
 if (row.trim().length > chunkWidth) chunkWidth = row.trim().length;
                                  }
                                  
               for (const row of chunk.split('\n')) {
         let padding = Math.floor((width - chunkWidth) / 2);
                    if (padding < 0) padding = 0;
         output += `${' '.repeat(padding)}${row.trim()}\n`;
                                  }
                                  }
                                  
                   return output.trimEnd() + '\n';
                                  }
                                  
                         export { format };

