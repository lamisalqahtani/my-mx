export const getAllPrograms = async (lang: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_GEE}/v1/programs/nanodegrees?lang=en`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        
        }),
        redirect: "follow",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
