import React from "react";
import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  ActivityFooter,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator
} from "react-activity-feed";
import { useRouter } from "next/router";

export const User = () => {
  const apiKey = "anxn9jdgeyrz";
  const appId = "1136904";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcjEifQ.XtpI-qNTVy_T3YTCXYUlabgQo3wRbWbQ3A_KggkZ4vk";
  const { query } = useRouter();

  return (
    <StreamApp apiKey={apiKey} appId={appId} token={token}>
      <div className="wrapper box">
        <h3>React Activity Feed</h3>
      </div>
      <StatusUpdateForm />
      <FlatFeed
        notify
        feedGroup="user"
        userId={query?.username}
        options={{ limit: 6, withOwnChildren: true, withRecentReactions: true }}
        Paginator={InfiniteScrollPaginator}
        Activity={({ activity, feedGroup, userId }) => (
          <Activity
            activity={activity}
            feedGroup={feedGroup}
            userId={userId}
            Footer={() => (
              <>
                <ActivityFooter
                  activity={activity}
                  feedGroup={feedGroup}
                  userId={userId}
                />
                <CommentField activity={activity} />
                <CommentList
                  activityId={activity.id}
                  CommentItem={({ comment }) => (
                    <div className="wrapper">
                      <CommentItem comment={comment} />
                      <LikeButton reaction={comment} />
                    </div>
                  )}
                />
              </>
            )}
          />
        )}
      />
    </StreamApp>
  );
};
