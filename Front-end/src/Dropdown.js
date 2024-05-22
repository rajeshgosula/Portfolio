import MenuFunction from "./MenuService";
const Dropdown =({submens, dropdown, depthlevel})=>{

depthlevel=depthlevel+1

const dropdownClass =depthlevel>1?"dropdown-submenu":""

return(
    <ul className={`dropdown ${dropdownClass} ${dropdown?"show":""}`}>
        {
            submens.map((submens, index)=>{
                <MenuFunction items={submens} key={index}depthlevel={depthlevel}/>
            })
        }
    </ul>
)
}
export default Dropdown