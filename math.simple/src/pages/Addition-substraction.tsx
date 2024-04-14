import { useState, useEffect, FormEvent } from "react";

export function AdditionSubtraction() {
    const [result, setResult] = useState<number>();
    const [answer, setAnswer] = useState<number>();
    const [validation, setValidation] = useState<boolean | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<number[]>([]);
    const [operator, setOperator] = useState<number>()

    useEffect(() => {
        const userNumber = 8
        const prob = Math.floor(Math.random() * 2) + 1
        setOperator(prob)

        const generateNumbers = () => {
            const generatedNumbers = []
            for (let i = 0; i < userNumber; i++) { 
                const newNumber = Math.floor(Math.random() * 100) + 1;
                generatedNumbers.push(newNumber)
            }
            setNumbers(generatedNumbers)
        }

        if (numbers.length === 0) {

            generateNumbers()

            setTimeout(() => {
                setIsLoading(false)
            }, 1000)

        } else {

            let calculatedResult
            if (prob === 1) {
                calculatedResult = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0)
            } else {
                calculatedResult = numbers.reduce((acumulador, elemento) => acumulador - elemento, 0);
            }
            setResult(calculatedResult)
            console.log(calculatedResult)
        }

    }, [numbers]) 

    const validateAnswer = (e: FormEvent<HTMLFormElement>) => {

        console.log(result,answer)
        e.preventDefault()
        if (result === answer) {
            setValidation(true)

            setTimeout(() => {
                setNumbers([])
            }, 1000)
        } else {
            setValidation(false)
        }
    }

    return (
        <section>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div>
                        <h2>MATH.SIMPLE</h2>
                    </div>
                    <div>
                        <form onSubmit={validateAnswer}>
                            <article>
                                <span>
                                    {numbers.map((number, index) => (
                                        <p key={index}>{number} {operator === 1 ? "+" : "-"}</p>
                                    ))}
                                </span>
                            </article>
                            <article>
                                <input
                                    className={`${validation ? "correct" : "incorrect"}`}
                                    onChange={(e) => {
                                        const inputValue = parseInt(e.target.value, 10);
                                        setAnswer(inputValue);
                                        setValidation(null);
                                    }}
                                />
                            </article>
                        </form>
                    </div>
                    <div>
                        <button>Skip</button>
                    </div>
                </div>
            )}
        </section>
    );
}
