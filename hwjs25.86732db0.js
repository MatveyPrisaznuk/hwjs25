let e=document.querySelector("#bookmarkInput"),t=document.querySelector("#bookmarkList"),a=document.querySelector("#addBookmarkBtn"),l=[];function n(){t.innerHTML=l.map((e,t)=>`<li class="list__item">
        <a href="${e}" class="link">${e}</a>
        <button id="addBookmarkBtn" data-action="${t}">X</button>
    </li>`).join("")}a.addEventListener("click",()=>{let t=e.value.trim();t&&(l.push(t),e.value="",n())}),t.addEventListener("click",e=>{let t=e.target.nodeName,a=e.target.dataset.action;"BUTTON"===t&&(l.splice(a,1),n())});let o=document.querySelector("#saveBtn"),r=document.querySelector(".form").elements;o.addEventListener("click",e=>{localStorage.clear(),e.preventDefault()});for(let e=0;e<r.length;e+=1)r[e].addEventListener("change",c);function c(){localStorage.setItem(this.name,this.value)}for(let e=0;e<r.length;e+=1)if("submit"!==r[e].type){let t=localStorage.getItem(r[e].name);null!==t&&(r[e].value=t)}
//# sourceMappingURL=hwjs25.86732db0.js.map
