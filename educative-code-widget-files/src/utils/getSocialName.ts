export const getSocialName = (socialLink: string) => {
    const socialPlatformNames = {
        educative: 'Educative',
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
        medium: 'Medium'
    };

    const domain = socialLink
        .split('.')[0]
        .replace('https://', '') as keyof typeof socialPlatformNames;

    return socialPlatformNames[domain];
}
