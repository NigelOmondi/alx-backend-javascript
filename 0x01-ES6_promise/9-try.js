export default function guardrail(mathFunction) {
    const queue = [];
  
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(new Error(error.message)); // Wrap the error message in an Error object
    } finally {
      queue.push('Guardrail was processed');
    }
  
    return queue;
  }
  