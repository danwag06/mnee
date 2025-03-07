var r=require("@bsv/sdk");function t(r){if(r&&r.__esModule)return r;var t=Object.create(null);return r&&Object.keys(r).forEach(function(e){if("default"!==e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})}}),t.default=r,t}var e=/*#__PURE__*/t(require("js-1sat-ord"));function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var o=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.lock=function(t,e){var n=[];if("string"==typeof t){var o=r.Utils.fromBase58Check(t);if(0!==o.prefix[0]&&111!==o.prefix[0])throw new Error("only P2PKH is supported");n=o.data}else n=t;var i=new r.LockingScript;return i.writeOpCode(r.OP.OP_DUP).writeOpCode(r.OP.OP_HASH160).writeBin(n).writeOpCode(r.OP.OP_EQUALVERIFY).writeOpCode(r.OP.OP_CHECKSIGVERIFY).writeBin(e.encode(!0)).writeOpCode(r.OP.OP_CHECKSIG),i},e.userUnlock=function(t,e,n,o,i){return void 0===e&&(e="all"),void 0===n&&(n=!1),{sign:function(s,a){try{var u,c,f,l=r.TransactionSignature.SIGHASH_FORKID;"all"===e&&(l|=r.TransactionSignature.SIGHASH_ALL),"none"===e&&(l|=r.TransactionSignature.SIGHASH_NONE),"single"===e&&(l|=r.TransactionSignature.SIGHASH_SINGLE),n&&(l|=r.TransactionSignature.SIGHASH_ANYONECANPAY);var d=s.inputs[a],h=s.inputs.filter(function(r,t){return t!==a}),v=d.sourceTXID?d.sourceTXID:null==(u=d.sourceTransaction)?void 0:u.id("hex");if(!v)throw new Error("The input sourceTXID or sourceTransaction is required for transaction signing.");if(o||(o=null==(c=d.sourceTransaction)?void 0:c.outputs[d.sourceOutputIndex].satoshis),!o)throw new Error("The sourceSatoshis or input sourceTransaction is required for transaction signing.");if(i||(i=null==(f=d.sourceTransaction)?void 0:f.outputs[d.sourceOutputIndex].lockingScript),!i)throw new Error("The lockingScript or input sourceTransaction is required for transaction signing.");var p=r.TransactionSignature.format({sourceTXID:v,sourceOutputIndex:d.sourceOutputIndex,sourceSatoshis:o,transactionVersion:s.version,otherInputs:h,inputIndex:a,outputs:s.outputs,inputSequence:d.sequence||4294967295,subscript:i,lockTime:s.lockTime,scope:l}),m=t.sign(r.Hash.sha256(p)),g=new r.TransactionSignature(m.r,m.s,l),P=new r.UnlockingScript;return P.writeBin(g.toChecksigFormat()),P.writeBin(t.toPublicKey().encode(!0)),Promise.resolve(P)}catch(r){return Promise.reject(r)}},estimateLength:function(){return Promise.resolve(182)}}},e.unlock=function(t,e,n,o,i,s){return void 0===n&&(n="all"),void 0===o&&(o=!1),{sign:function(a,u){try{var c,f,l,d=r.TransactionSignature.SIGHASH_FORKID;"all"===n&&(d|=r.TransactionSignature.SIGHASH_ALL),"none"===n&&(d|=r.TransactionSignature.SIGHASH_NONE),"single"===n&&(d|=r.TransactionSignature.SIGHASH_SINGLE),o&&(d|=r.TransactionSignature.SIGHASH_ANYONECANPAY);var h=a.inputs[u],v=a.inputs.filter(function(r,t){return t!==u}),p=h.sourceTXID?h.sourceTXID:null==(c=h.sourceTransaction)?void 0:c.id("hex");if(!p)throw new Error("The input sourceTXID or sourceTransaction is required for transaction signing.");if(i||(i=null==(f=h.sourceTransaction)?void 0:f.outputs[h.sourceOutputIndex].satoshis),!i)throw new Error("The sourceSatoshis or input sourceTransaction is required for transaction signing.");if(s||(s=null==(l=h.sourceTransaction)?void 0:l.outputs[h.sourceOutputIndex].lockingScript),!s)throw new Error("The lockingScript or input sourceTransaction is required for transaction signing.");var m=r.TransactionSignature.format({sourceTXID:p,sourceOutputIndex:h.sourceOutputIndex,sourceSatoshis:i,transactionVersion:a.version,otherInputs:v,inputIndex:u,outputs:a.outputs,inputSequence:h.sequence||4294967295,subscript:s,lockTime:a.lockTime,scope:d}),g=t.sign(r.Hash.sha256(m)),P=new r.TransactionSignature(g.r,g.s,d),S=new r.UnlockingScript;return S.writeBin(P.toChecksigFormat()),S.writeScript(e),Promise.resolve(S)}catch(r){return Promise.reject(r)}},estimateLength:function(){return Promise.resolve(182)}}},t}();function i(r,t){try{var e=r()}catch(r){return t(r)}return e&&e.then?e.then(void 0,t):e}function s(r,t,e){if(!r.s){if(e instanceof a){if(!e.s)return void(e.o=s.bind(null,r,t));1&t&&(t=e.s),e=e.v}if(e&&e.then)return void e.then(s.bind(null,r,t),s.bind(null,r,2));r.s=t,r.v=e;var n=r.o;n&&n(r)}}var a=/*#__PURE__*/function(){function r(){}return r.prototype.then=function(t,e){var n=new r,o=this.s;if(o){var i=1&o?t:e;if(i){try{s(n,1,i(this.v))}catch(r){s(n,2,r)}return n}return this}return this.o=function(r){try{var o=r.v;1&r.s?s(n,1,t?t(o):o):e?s(n,1,e(o)):s(n,2,o)}catch(r){s(n,2,r)}},n},r}();function u(r){return r instanceof a&&1&r.s}var c="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator",f=/*#__PURE__*/function(){function t(r){this.MNEE_TOKEN_ID="ae59f3b898ec61acbdb6cc7a245fabeded0c094bf046f35206a3aec60ef88127_0",this.MNEE_COSIGNER_PROD="020a177d6a5e6f3a8689acd2e313bd1cf0dcf5a243d1cc67b7218602aee9e04b2f",this.MNEE_DECIMALS=5,this.mneeApiToken="92982ec1c0975f31979da515d46bae9f",this.mneeApi="https://proxy-api.mnee.net",this.gorillaPoolApi="https://ordinals.1sat.app",r&&(this.mneeApiToken=r)}var f=t.prototype;return f.getConfig=function(){try{var r=this;return Promise.resolve(i(function(){return Promise.resolve(fetch(r.mneeApi+"/v1/config?auth_token="+r.mneeApiToken,{method:"GET"})).then(function(r){if(!r.ok)throw new Error("HTTP error! status: "+r.status);return Promise.resolve(r.json())})},function(r){console.error("Failed to fetch config:",r)}))}catch(r){return Promise.reject(r)}},f.toAtomicAmount=function(r,t){return Math.round(r*Math.pow(10,t))},f.createInscription=function(t,n,i){try{var s={p:"bsv-20",op:"transfer",id:i.tokenId,amt:n.toString()};return Promise.resolve({lockingScript:e.applyInscription((new o).lock(t,r.PublicKey.fromString(i.approver)),{dataB64:Buffer.from(JSON.stringify(s)).toString("base64"),contentType:"application/bsv-20"}),satoshis:1})}catch(r){return Promise.reject(r)}},f.getUtxos=function(r,t){void 0===t&&(t=["transfer","deploy+mint"]);try{var e=this;return Promise.resolve(i(function(){return Promise.resolve(fetch(e.mneeApi+"/v1/utxos?auth_token="+e.mneeApiToken,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([r])})).then(function(r){if(!r.ok)throw new Error("HTTP error! status: "+r.status);return Promise.resolve(r.json()).then(function(r){return t.length?r.filter(function(r){return t.includes(r.data.bsv21.op.toLowerCase())}):r})})},function(r){return console.error("Failed to fetch UTXOs:",r),[]}))}catch(r){return Promise.reject(r)}},f.broadcast=function(r){try{var t=this.gorillaPoolApi+"/v5/tx";return Promise.resolve(i(function(){return Promise.resolve(fetch(t,{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:Buffer.from(r.toBinary())})).then(function(r){return Promise.resolve(r.json()).then(function(t){return r.ok?{status:"success",txid:t.txid,message:"Transaction broadcast successfully"}:{status:"error",code:r.status.toString(),description:t.error||"Unknown error"}})})},function(r){return console.error("Failed to broadcast:",r),{status:"error",code:"UNKNOWN",description:r instanceof Error?r.message:"Unknown error"}}))}catch(r){return Promise.reject(r)}},f.fetchBeef=function(t){try{return Promise.resolve(fetch(this.gorillaPoolApi+"/v5/tx/"+t+"/beef")).then(function(e){if(404===e.status)throw new Error("Transaction not found");if(200!==e.status)throw new Error(e.status+" - Failed to fetch beef for tx "+t);var n=Buffer,o=n.from;return Promise.resolve(e.arrayBuffer()).then(function(t){var e=[].concat(o.call(n,t));return r.Transaction.fromAtomicBEEF(e)})})}catch(r){return Promise.reject(r)}},f.getSignatures=function(t,e){try{try{var n;switch(t.format){case"beef":n=r.Transaction.fromHexBEEF(t.rawtx);break;case"ef":n=r.Transaction.fromHexEF(t.rawtx);break;default:n=r.Transaction.fromHex(t.rawtx)}var o=t.sigRequests.flatMap(function(t){return[e].map(function(e){var o=r.TransactionSignature.format({sourceTXID:t.prevTxid,sourceOutputIndex:t.outputIndex,sourceSatoshis:t.satoshis,transactionVersion:n.version,otherInputs:n.inputs.filter(function(r,e){return e!==t.inputIndex}),inputIndex:t.inputIndex,outputs:n.outputs,inputSequence:n.inputs[t.inputIndex].sequence||0,subscript:t.script?r.Script.fromHex(t.script):(new r.P2PKH).lock(e.toPublicKey().toAddress()),lockTime:n.lockTime,scope:t.sigHashType||65}),i=e.sign(r.Hash.sha256(o)),s=new r.TransactionSignature(i.r,i.s,t.sigHashType||65);return{sig:r.Utils.toHex(s.toChecksigFormat()),pubKey:e.toPublicKey().toString(),inputIndex:t.inputIndex,sigHashType:t.sigHashType||65,csIdx:t.csIdx}})});return Promise.resolve({sigResponses:o})}catch(r){var i;return console.error("getSignatures error",r),Promise.resolve({error:{message:null!=(i=r.message)?i:"unknown",cause:r.cause}})}}catch(r){return Promise.reject(r)}},f.transfer=function(t,e){try{var o=this;return Promise.resolve(i(function(){return Promise.resolve(o.getConfig()).then(function(i){if(!i)throw new Error("Config not fetched");var f=t.reduce(function(r,t){return r+t.amount},0);if(f<=0)return{error:"Invalid amount"};var l=o.toAtomicAmount(f,i.decimals),d=r.PrivateKey.fromWif(e),h=d.toAddress();return Promise.resolve(o.getUtxos(h)).then(function(e){var f,h;function v(e){if(h)return e;function f(){function t(){function t(){var t=m.inputs.map(function(t,e){var n,o;if(!t.sourceTXID)throw new Error("Source TXID is undefined");return{prevTxid:t.sourceTXID,outputIndex:t.sourceOutputIndex,inputIndex:e,address:P[e],script:null==(n=t.sourceTransaction)?void 0:n.outputs[t.sourceOutputIndex].lockingScript.toHex(),satoshis:(null==(o=t.sourceTransaction)?void 0:o.outputs[t.sourceOutputIndex].satoshis)||1,sigHashType:r.TransactionSignature.SIGHASH_ALL|r.TransactionSignature.SIGHASH_ANYONECANPAY|r.TransactionSignature.SIGHASH_FORKID}}),e=m.toHex();return Promise.resolve(o.getSignatures({rawtx:e,sigRequests:t},d)).then(function(t){if(null==t||!t.sigResponses)return{error:"Failed to get signatures"};for(var e,i=function(r){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e={}.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r))){t&&(r=t);var e=0;return function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t.sigResponses);!(e=i()).done;){var s=e.value;m.inputs[s.inputIndex].unlockingScript=(new r.Script).writeBin(r.Utils.toArray(s.sig,"hex")).writeBin(r.Utils.toArray(s.pubKey,"hex"))}var a=r.Utils.toBase64(m.toBinary());return Promise.resolve(fetch(o.mneeApi+"/v1/transfer?auth_token="+o.mneeApiToken,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rawtx:a})})).then(function(t){if(!t.ok)throw new Error("HTTP error! status: "+t.status);return Promise.resolve(t.json()).then(function(t){var e=t.rawtx;if(!e)return{error:"Failed to broadcast transaction"};var n=r.Utils.toArray(e,"base64"),i=r.Transaction.fromBinary(n);return Promise.resolve(o.broadcast(i)).then(function(){return{txid:i.id("hex"),rawtx:r.Utils.toHex(n)}})})})})}var e=g-l-p,s=function(){if(e>0){var r=m.addOutput;return Promise.resolve(o.createInscription(S,e,i)).then(function(t){r.call(m,t)})}}();return s&&s.then?s.then(t):t()}var e=function(){if(p>0){var r=m.addOutput;return Promise.resolve(o.createInscription(i.feeAddress,p,i)).then(function(t){r.call(m,t)})}}();return e&&e.then?e.then(t):t()}var v=function(r,t){if("function"==typeof r[c]){var e,n,o,i=function(r){try{for(;!(e=f.next()).done;)if((r=t(e.value))&&r.then){if(!u(r))return void r.then(i,o||(o=s.bind(null,n=new a,2)));r=r.v}n?s(n,1,r):n=r}catch(r){s(n||(n=new a),2,r)}},f=r[c]();if(i(),f.return){var l=function(r){try{e.done||f.return()}catch(r){}return r};if(n&&n.then)return n.then(l,function(r){throw l(r)});l()}return n}if(!("length"in r))throw new TypeError("Object is not iterable");for(var d=[],h=0;h<r.length;h++)d.push(r[h]);return function(r,t){var e,n,o=-1;return function i(c){try{for(;++o<r.length;)if((c=t(o))&&c.then){if(!u(c))return void c.then(i,n||(n=s.bind(null,e=new a,2)));c=c.v}e?s(e,1,c):e=c}catch(r){s(e||(e=new a),2,r)}}(),e}(d,function(r){return t(d[r])})}(t,function(r){var t=m.addOutput;return Promise.resolve(o.createInscription(r.address,o.toAtomicAmount(r.amount,i.decimals),i)).then(function(r){t.call(m,r)})});return v&&v.then?v.then(f):f()}if(e.reduce(function(r,t){return r+(t.data.bsv21.amt||0)},0)<l)return{error:"Insufficient MNEE balance"};var p=void 0!==t.find(function(r){return r.address===i.burnAddress})?0:null==(f=i.fees.find(function(r){return l>=r.min&&l<=r.max}))?void 0:f.fee;if(void 0===p)return{error:"Fee ranges inadequate"};var m=new r.Transaction(1,[],[],0),g=0,P=[],S="",T=function(r,t,e){for(var n;;){var o=r();if(u(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=e();if(i&&i.then){if(!u(i)){n=1;break}i=i.s}}var c=new a,f=s.bind(null,c,2);return(0===n?o.then(d):1===n?i.then(l):(void 0).then(function(){(o=r())?o.then?o.then(d).then(void 0,f):d(o):s(c,1,i)})).then(void 0,f),c;function l(t){i=t;do{if(!(o=r())||u(o)&&!o.v)return void s(c,1,i);if(o.then)return void o.then(d).then(void 0,f);u(i=e())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,f)}function d(r){r?(i=e())&&i.then?i.then(l).then(void 0,f):l(i):s(c,1,i)}}(function(){return!h&&g<l+p},0,function(){var t=e.shift();return t?Promise.resolve(o.fetchBeef(t.txid)).then(function(e){if(!e)return h=1,{error:"Failed to fetch source transaction"};P.push(t.owners[0]),S=S||t.owners[0],m.addInput({sourceTXID:t.txid,sourceOutputIndex:t.vout,sourceTransaction:e,unlockingScript:new r.UnlockingScript}),g+=t.data.bsv21.amt}):(h=1,{error:"Insufficient MNEE balance"})});return T&&T.then?T.then(v):v(T)})})},function(r){var t="Transaction submission failed";return r instanceof Error&&(t=r.message,r.message.includes("HTTP error")&&console.error("HTTP error details:",r)),console.error("Failed to transfer tokens:",t),{error:t}}))}catch(r){return Promise.reject(r)}},f.getBalance=function(r){try{var t=this;return Promise.resolve(i(function(){return Promise.resolve(t.getConfig()).then(function(e){if(!e)throw new Error("Config not fetched");return Promise.resolve(t.getUtxos(r)).then(function(r){var t=r.reduce(function(r,t){return"transfer"===t.data.bsv21.op&&(r+=t.data.bsv21.amt),r},0);return{amount:t,decimalAmount:parseFloat((t/Math.pow(10,e.decimals||0)).toFixed(e.decimals))}})})},function(r){return console.error("Failed to fetch balance:",r),{amount:0,decimalAmount:0}}))}catch(r){return Promise.reject(r)}},f.validateMneeTx=function(t,e){try{var n=this;try{var o=r.Transaction.fromHex(t),i=o.outputs.map(function(r){return r.lockingScript}).map(function(t){for(var e=t.chunks,n=0;n<=e.length-6;n++){var o,i;if(e[0+n].op===r.OP.OP_DUP&&e[1+n].op===r.OP.OP_HASH160&&20===(null==(o=e[2+n].data)?void 0:o.length)&&e[3+n].op===r.OP.OP_EQUALVERIFY&&e[4+n].op===r.OP.OP_CHECKSIGVERIFY&&33===(null==(i=e[5+n].data)?void 0:i.length)&&e[6+n].op===r.OP.OP_CHECKSIG)return{cosigner:r.Utils.toHex(e[5+n].data||[]),address:r.Utils.toBase58Check(e[2+n].data||[],[0])}}});return e?e.forEach(function(t,e){var s,a=t.address,u=t.amount;if(!i.find(function(r){return(null==r?void 0:r.cosigner)===n.MNEE_COSIGNER_PROD}))throw new Error("Cosigner not found for address: "+a+" at index: "+e);if(!i.find(function(r){return(null==r?void 0:r.address)===a}))throw new Error("Address not found in script for address: "+a+" at index: "+e);var c=function(t){for(var e,n,o,i=0;i<t.chunks.length;i++){var s,a=t.chunks[i];i>=2&&3===(null==(s=a.data)?void 0:s.length)&&"ord"==r.Utils.toUTF8(a.data)&&t.chunks[i-1].op==r.OP.OP_IF&&t.chunks[i-2].op==r.OP.OP_FALSE&&(o=i+1)}if(void 0!==o){for(var u={file:{hash:"",size:0,type:""},fields:{}},c=o;c<t.chunks.length;c+=2){var f,l,d=t.chunks[c];if(d.op==r.OP.OP_ENDIF)break;if(d.op>r.OP.OP_16)return;var h=t.chunks[c+1];if(h.op>r.OP.OP_PUSHDATA4)return;if(null==(f=d.data)||!f.length){var v=0;switch(d.op>r.OP.OP_PUSHDATA4&&d.op<=r.OP.OP_16?v=d.op-80:null!=(l=d.data)&&l.length&&(v=d.data[0]),v){case 0:if(u.file.size=(null==(e=h.data)?void 0:e.length)||0,null==(n=h.data)||!n.length)break;u.file.hash=r.Utils.toBase64(r.Hash.sha256(h.data)),u.file.content=h.data;break;case 1:u.file.type=Buffer.from(h.data||[]).toString()}}}return u}}(o.outputs[e].lockingScript),f=null==c||null==(s=c.file)?void 0:s.content;if(!f)throw new Error("Invalid inscription content");var l=r.Utils.toUTF8(f);if(!l)throw new Error("Invalid inscription content");var d=JSON.parse(l);if("bsv-20"!==d.p)throw new Error("Invalid bsv 20 protocol: "+d.p);if("transfer"!==d.op)throw new Error("Invalid operation: "+d.op);if(d.id!==n.MNEE_TOKEN_ID)throw new Error("Invalid token id: "+d.id);if(d.amt!==Math.round(u*Math.pow(10,n.MNEE_DECIMALS)).toString())throw new Error("Invalid amount: "+d.amt)}):i.forEach(function(r){if(r&&r.cosigner!==n.MNEE_COSIGNER_PROD)throw new Error("Invalid cosigner: "+r.cosigner)}),Promise.resolve(!0)}catch(r){return console.error(r),Promise.resolve(!1)}}catch(r){return Promise.reject(r)}},t}();module.exports=/*#__PURE__*/function(){function r(r){this.service=void 0,this.service=new f(r)}var t=r.prototype;return t.validateMneeTx=function(r,t){try{return Promise.resolve(this.service.validateMneeTx(r,t))}catch(r){return Promise.reject(r)}},t.toAtomicAmount=function(r,t){return this.service.toAtomicAmount(r,t)},t.config=function(){try{return Promise.resolve(this.service.getConfig())}catch(r){return Promise.reject(r)}},t.balance=function(r){try{return Promise.resolve(this.service.getBalance(r))}catch(r){return Promise.reject(r)}},t.transfer=function(r,t){try{return Promise.resolve(this.service.transfer(r,t))}catch(r){return Promise.reject(r)}},r}();
//# sourceMappingURL=index.cjs.map
