const Semaphore = (maxConcurrency: number) => {
  const tasks: AnyArray = [];
  let currentConcurrency = 0;

  const acquire = () => {
    if (currentConcurrency < maxConcurrency) {
      currentConcurrency++;
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      tasks.push(resolve);
    });
  };

  const release = () => {
    if (tasks.length > 0) {
      const resolve = tasks.shift();
      resolve();
    } else {
      currentConcurrency--;
    }
  };

  const use = async (fn: AnyFunction) => {
    await acquire();
    try {
      // eslint-disable-next-line @typescript-eslint/return-await
      return await fn();
    } finally {
      release();
    }
  };

  return { use };
};

export default Semaphore;
