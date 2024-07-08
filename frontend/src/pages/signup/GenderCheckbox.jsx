const GenderCheckbox = () => {
return (
    <div className="flex">
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
        <div className="form-control ml-2">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
    </div>
);
}

export default GenderCheckbox;



// STARTER CODE FOR THIS PAGE
// const GenderCheckbox = () => {
//     return (
//         <div className="flex">
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>
//             <div className="form-control ml-2">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>
//         </div>
//     );
//     }
    
//     export default GenderCheckbox;
    
    