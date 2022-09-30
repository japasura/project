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

export default function App() {
    return <div className={"flex flex-col justify-center items-center p-3"}>
        <h1 className={"text-3xl font-bold"}>Clocker</h1>
        <div>
            <table className={"border"}>
                <thead>
                    <HeadingRow/>
                </thead>
                <tbody>
                    <TimeTrackerBody/>
                </tbody>
            </table>
        </div>
    </div>
}
