export default class NodeEnv {
    public static isDevelopment = () => process.env.NODE_ENV === 'development';
}
