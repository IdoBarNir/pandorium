export const loggerDogger = async ({
  child,
  childLabel,
  args,
  onlyTryCatch = false,
}: {
  child: ({ ...args }: any) => Promise<any>;
  childLabel: string;
  args?: any;
  onlyTryCatch?: boolean;
}) => {
  !onlyTryCatch && console.log(`\n\nStarting ${childLabel}...\n\n`);
  try {
    const result = await child(args);
    !onlyTryCatch &&
      console.log(`\n\n${childLabel} finished successfully! :)\n\n`);
    return result;
  } catch (error) {
    throw new Error(`\n\n${childLabel} failed: ${error.message}\n\n`);
  }
};
