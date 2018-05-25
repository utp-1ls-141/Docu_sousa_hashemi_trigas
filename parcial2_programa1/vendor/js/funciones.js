function trim (str)
            {
                 return str.replace (/^\s+|\s+$/g, '');
            }
            
                      function isomorphic() {
                        
                        var x = document.getElementById('palabra1');
                        var xx = document.getElementById('palabra2');
                        var xxx = document.getElementById('palabra3');
                        var y = x.value;
                        var yy = xx.value;
                        var yyy = xxx.value;
                        var map1={}, map2={}; map3={};
                        if (trim(y)=='' || trim(yy)=='' || trim(yyy)=='' )
                        {
                            alert('Faltan datos...')
                        
                        }else if(y.length !== yy.length !== yyy.length){

                            alert('Tienen que ser iguales')
                        }else
                        {
                            for(var i=0; i<y.length;i++){
                                if(typeof map1[y[i]] == "undefined" && typeof map2[yy[i]] == "undefined" && typeof map3[yyy[i]] == "undefined"){
                                    map1[y[i]] = yy[i];
                                    map2[yy[i]] = y[i];
                                    map3[yyy[i]] = y[i];
                                }else{
                                    if(map1[y[i]] !== yy[i] && map2[yy[i]] !== y[i] && map3[yyy[i]] !== y[i]){
                                        alert('No son isomorficas')
                                    }else{
                                        alert('Son isomorficas')
                                    }
                                }
                        
                            }   
                        }
                    }
                      