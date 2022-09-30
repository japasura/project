import {ReactNode} from "react";

const TableItem = (props: {children?: ReactNode}) => {
    return <td className={"border w-20 text-center"}>
        {props.children}
    </td>
}

function HeadingRow(){
    const nums = ['00-15', '15-30', '30-45', '45-00']

    return <tr className={"border"}>
        <TableItem/>
        {
            nums.map((k, v) => {
                return <TableItem key={v}>{k}</TableItem>
            })
        }
        <TableItem/>
        <TableItem/>
        {
            nums.map((k, v) => {
                return <TableItem key={v}>{k}</TableItem>
            })
        }
    </tr>
}

function TimeTrackerBody(){
    const hours = Array.from(Array(12).keys())
    const arr = Array.from(Array(4).keys());
    return <>
        {
            hours.map((h, i) => {
                return <tr key={i}>
                    <TableItem>{h}</TableItem>
                    {
                        arr.map(i => {
                            return <TableItem key={i}/>
                        })
                    }
                    <TableItem/>
                    <TableItem>{h+12}</TableItem>
                    {
                        arr.map(i => {
                            return <TableItem key={i}/>
                        })
                    }
                </tr>
            })
        }
    </>
}


function TimeTrackerControls(){
    const hours = Array.from(Array(24).keys())
    const minutes = ['00-15', '15-30', '30-45', '45-00']

    return <div className={"flex flex-row justify-evenly w-full"}>
            <span>
                <input className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" +
                    " focus-visible:border-gray-800"} placeholder={"Task"} />
            </span>
        <div className={"flex flex-row gap-3"}>
            <div className={"flex gap-1 flex-row items-center"}>
                <label>Hour</label>
                <select className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" +
                    " focus-visible:border-gray-800"}>
                    {
                        hours.map(h => {
                            return <option key={h} value={h}>{h}</option>
                        })
                    }
                </select>
            </div>
            <div className={"flex gap-1 flex-row items-center"}>
                <label>Minutes</label>
                <select className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" +
                    " focus-visible:border-gray-800"}>
                    {
                        minutes.map(h => {
                            return <option key={h} value={h}>{h}</option>
                        })
                    }
                </select>
            </div>
        </div>
        <span>
                <select value={0} className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" +
                    " focus-visible:border-gray-800"}>
                    <option value={0} disabled={true}>Color</option>
                    <option>Red</option>
                </select>
            </span>

    </div>
}

export default function App() {
    return <div className={"flex flex-col justify-center items-center p-3 gap-4"}>
        <h1 className={"text-3xl font-bold"}>Clocker</h1>
        <div>
            <table className={"table border"}>
                <thead>
                    <HeadingRow/>
                </thead>
                <tbody>
                    <TimeTrackerBody/>
                </tbody>
            </table>
        </div>
        <TimeTrackerControls/>
    </div>
}
