import useAnalytics from "./hooks/useAnalytics";

export default function useAnalyticsData(authToken: string, date: string) {
    const analytics = useAnalytics(authToken, date)
    if (!analytics){
        return []
    }

    const rv = []
    for (const analyticsKey in analytics.analytics) {
        rv.push({
            label: analyticsKey,
            time: analytics.analytics[analyticsKey]
        })
    }
    console.log(rv)
    return rv
}