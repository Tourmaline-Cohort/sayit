import Button from "./Button"



const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div>
                Counter: {count}
            </div>

            <Button
                onClick={onIncrement}
                label="Increment"
                className="bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"

            />
            <Button
                onClick={onDecrement}
                label="Decrement"
                className="bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors"

            />
        </div>
    )
}
export default Counter